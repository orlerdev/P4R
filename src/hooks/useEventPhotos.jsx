import { useEffect, useState } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config';

function useEventPhotos(eventName) {
	const [photoURLs, setPhotoURLs] = useState([]);

	useEffect(() => {
		async function fetchEventPhotos() {
			try {
				const eventRef = ref(storage, eventName);
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
	}, [eventName]);
	return photoURLs;
}

export default useEventPhotos;
