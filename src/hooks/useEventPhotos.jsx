import { useEffect, useState } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config';

function useEventPhotos(eventFolder) {
	const [photoURLs, setPhotoURLs] = useState([]);

	useEffect(() => {
		async function fetchEventPhotos() {
			try {
				const promises = [];
				const eventRef = ref(storage, eventFolder);

				// Fetch the URLs for each image file directly
				for (let i = 1; i <= 15; i++) {
					const fileName = `event1_${i}.png`;
					const photoRef = ref(eventRef, fileName);
					promises.push(getDownloadURL(photoRef));
				}

				const urls = await Promise.all(promises);
				setPhotoURLs(urls);
			} catch (error) {
				console.error('Error retrieving photos:', error);
				setPhotoURLs([]); // Reset the state in case of an error
			}
		}

		fetchEventPhotos();
	}, [eventFolder]);

	return photoURLs;
}

export default useEventPhotos;
