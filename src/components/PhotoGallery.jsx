import styled from 'styled-components';
import useEventPhotos from '../hooks/useEventPhotos';

const PhotoGalleryContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	font-size: 2em;
	gap: 5px;
	padding: 15px;
	min-height: 30rem;
	width: 85rem;
	border: none;
	outline: none;
	overflow-y: auto;
	background: linear-gradient(
		rgba(255, 255, 255, 0.7),
		rgba(255, 255, 255, 0.7)
	);
	box-shadow: #fff 0 0 5px;
`;

const ImagesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	gap: 20px;
	padding: 10px;
`;

const Image = styled.img`
	width: 12rem;
	aspect-ratio: 4/3;
	box-shadow: #fff 2px 3px 10px;
	cursor: pointer;
	transition: all ease-in-out 0.35s;

	&:hover {
		transform: scale(1.2);
	}
`;

const PhotoGallery = () => {
	const eventFolder = 'event1';
	const photoURLs = useEventPhotos(eventFolder);
	console.log(photoURLs);

	return (
		<PhotoGalleryContainer>
			<h2></h2>
			<ImagesContainer>
				<h3>Images Container</h3>
				{photoURLs.map(url => {
					<Image key={url} src={url} alt="Event Photo" />;
				})}
			</ImagesContainer>
		</PhotoGalleryContainer>
	);
};

export default PhotoGallery;
