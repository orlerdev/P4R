import styled from 'styled-components';
import PropTypes from 'prop-types';
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
	width: 200px;
	aspect-ratio: 4/3;
	box-shadow: #fff 2px 3px 10px;
	cursor: pointer;
	transition: all ease-in-out 0.35s;

	&:hover {
		transform: scale(1.2);
	}
`;

const PhotoGallery = ({ title, eventName }) => {
	// CAN REMOVE eventFolder AND PASS THE STRING DIRECTLY INTO photoURLs INSTEAD
	// RENAME photoURLs TO BE THE NAME OF THE EVENT TO SHOW: event1Photos

	const eventPhotos = useEventPhotos(eventName);

	return (
		<PhotoGalleryContainer>
			<h2>{title}</h2>
			<ImagesContainer>
				{eventPhotos.map(url => (
					<Image key={url} src={url} alt="Event Photo" />
				))}
			</ImagesContainer>
		</PhotoGalleryContainer>
	);
};

export default PhotoGallery;

PhotoGallery.propTypes = {
	title: PropTypes.string.isRequired,
	eventName: PropTypes.string.isRequired
};
