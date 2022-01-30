import SearchBar from "../SearchBar";
import NewsCard from "../NewsCard";
import { News } from "../../types/News";
import { useMemo } from "react";
import { collection, getFirestore, query } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { observer } from "mobx-react";
import SearchStore from "../../mobx/SearchStore";

const LeftPanel = observer(() => {

	const db = useMemo(() => getFirestore(), []);
	const collectionRef = useMemo(() => collection(db, 'News'), []);
	const [news, isNewsLoading, isNewsError] = useCollectionData(query(collectionRef), {idField: 'id'});
    const filter = SearchStore.filter;

    return (
        <>
            <SearchBar />
            {
                news && (news as any as News[]).sort((a, b) => {
                        const i = new Date(a.source_date);
                        const j = new Date(b.source_date);
                        if (i > j) {
                            return -1;
                        } else if (i < j) {
                            return 1;
                        } else {
                            return 0;
                        }
                    })
                    .filter(e => !filter || e.keywords.some(i => i.includes(filter)))
                    .map((e) => (
                        <NewsCard
                            news_id={e.id}
                            title={e.title}
                            content={e.content}
                            source_date={e.source_date}
                            source_url={e.source_url}
                            source_icon_url="https://source.unsplash.com/random/400x200"
                            source_name={e.source_name}
                            keywords={e.keywords}
                            is_positive={!!e.is_positive}
                            summary={e.summary}
                        />
                    ))
            }
        </>
    );
});

export default LeftPanel;