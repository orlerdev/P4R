import { useEffect, useState } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config';

function useEventPhotos(eventFolder) {
	const [photoURLs, setPhotoURLs] = useState([]);

	useEffect(() => {
		async function fetchEventPhotos() {
			try {
				const eventRef = ref(storage, eventFolder);
				const { items } = await listAll(eventRef);
				const promises = items.map(item => getDownloadURL(item));
				const urls = await Promise.all(promises);
				setPhotoURLs(urls);
			} catch (error) {
				console.error('Error retrieving photos:', error);
				setPhotoURLs([]);
			}
		}
		fetchEventPhotos();
	}, [eventFolder]);
	return photoURLs;
}

export default useEventPhotos;
