
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useMemo } from "react";
import { getFirestore, collection, query } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";


const SourceSelection = () => {

	const db = useMemo(() => getFirestore(), []);
	const collectionRef = useMemo(() => collection(db, 'SourceCollection'), []);
	const [sourceCollectionList, isSourceCollectionListLoading, isSourceCollectionListError] = useCollectionData(query(collectionRef), { idField: 'id' });

	useEffect(() => {
		console.log(sourceCollectionList);
		if (sourceCollectionList) {
		console.log(sourceCollectionList[0]);
		}
	}, [sourceCollectionList]);

	return (
		<>
			{
				sourceCollectionList && sourceCollectionList.map((sourceCollection: any) => 
					<Accordion key={sourceCollection.name}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
						>
							<Typography> {sourceCollection.name} </Typography>
						</AccordionSummary>

						<AccordionDetails>
							<List>
								<ListItem>
									<FormGroup>
										{
											sourceCollection.sources && sourceCollection.sources.map((source: any) => (
												<FormControlLabel key={source} control={<Checkbox defaultChecked />} label={source} />
											))
										}
									</FormGroup>
								</ListItem>
							</List>
						</AccordionDetails>
					</Accordion>
				)
			}
		</>
	);
};

export default SourceSelection;
