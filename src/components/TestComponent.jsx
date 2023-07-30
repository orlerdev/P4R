// TestComponent.js
import { useEffect } from 'react';
import useEventPhotos from '../hooks/useEventPhotos';

const TestComponent = () => {
	const eventFolder = 'event1';
	const photoURLs = useEventPhotos(eventFolder);

	useEffect(() => {
		console.log('photoURLs:', photoURLs);
	}, [photoURLs]);

	return <div>Check console for photoURLs</div>;
};

export default TestComponent;
