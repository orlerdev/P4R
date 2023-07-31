import styled from 'styled-components';

const OverlayContainer = styled.div`
	position: fixed;
	top: 80px;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
	pointer-events: none;
	z-index: 20;
`;

const Overlay = () => {
	return <OverlayContainer></OverlayContainer>;
};
export default Overlay;
