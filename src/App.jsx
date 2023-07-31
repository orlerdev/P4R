import Navbar from './components/Navbar';
import PhotoGallery from './components/PhotoGallery';
import Overlay from './components/Overlay';
import styled from 'styled-components';
import './App.css';

const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	background: rgba(50, 50, 50, 1);
`;

const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const PageRow = styled.div`
	display: flex;
	flex: 1 0 0;
`;
const PageColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	row-gap: 40px;
	flex: 1 0 0;
	margin-top: 80px;
`;

const Landing = styled.div`
	height: 100vh;
	width: 100vw;
	background: url('./p4rlogo.png'),
		linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),
		url('./lanzamiento_2.png');
	background-size: 60rem auto, cover, cover;
	background-repeat: no-repeat;
	background-position: top center, center, center;
	text-align: center;

	h1 {
		position: absolute;
		bottom: 5%;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		font-size: 8em;
		color: #fff;
		text-shadow: #000 2px 6px 6px;
	}
`;

function App() {
	return (
		<>
			<Overlay />
			<PageWrapper>
				<PageContainer>
					<PageRow>
						<PageColumn>
							<Navbar />
							<Landing>
								<h1>estrategia para su marca</h1>
							</Landing>
							<PhotoGallery title="Event 1" eventName="event1" />
							<PhotoGallery title="Event 2" eventName="event2" />
							<PhotoGallery title="Event 5" eventName="event5" />
						</PageColumn>
					</PageRow>
				</PageContainer>
			</PageWrapper>
		</>
	);
}

export default App;
