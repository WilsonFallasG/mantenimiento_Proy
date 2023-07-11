import { app, firestore } from "./appFB";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);

export default async function getDocument(collec) {
    let error = null;
    const result = [];
    try {
        
        const querySnapshot = await getDocs(collection(db, collec));
        
        querySnapshot.forEach(doc => {
            result.push(doc.id);
            
        });
    } catch (e) {
        error = e;
        console.log(e);
    }
    console.log(result)
    return { result, error };
}
