import styled from '@emotion/styled';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import { media } from '../styles/utils';
import PropTypes from 'prop-types';

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

const DefaultLayout = ({ children }) => {
	return (
		<PageWrapper>
			<PageContainer>
				<PageRow>
					<PageColumn>
						<Navbar />
						{children}
						<Footer />
					</PageColumn>
				</PageRow>
			</PageContainer>
		</PageWrapper>
	);
};
export default DefaultLayout;
DefaultLayout.propTypes = {
	children: PropTypes.node.isRequired
};
