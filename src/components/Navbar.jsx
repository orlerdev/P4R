import styled from 'styled-components';

const Nav = styled.nav`
	z-index: 99;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	width: 100%;
	font-size: 2em;
	background: rgba(90, 90, 90, 0.9);
	color: #000;
	padding: 0 20px;
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
	height: 80px;
	width: 4em;

	img {
		width: 100%;
		aspect-ratio: auto;
	}
`;

const Menu = styled.ul`
	list-style-type: style none;
	display: flex;
	align-items: center;
	column-gap: 15px;

	span {
		font-size: 1.5em;
	}

	li {
		cursor: pointer;
		border: none;
		border-radius: 0.1em;
		outline: none;
		padding: 5px 10px;
		transition: all ease-in 0.3s;

		&:hover {
			background: rgba(16, 169, 236, 0.5);
		}
	}
`;

const Navbar = () => {
	return (
		<Nav>
			<Logo>
				<a href="#">
					<img src="./p4rlogo.png" alt="P4R Logo" />
				</a>
			</Logo>
			<Menu>
				<li>
					<a href="/"></a>
				</li>
				<span> | </span>
				<li>About Us</li>
				<span> | </span>
				<li>Our Events</li>
				<span> | </span>
				<li>Our Services</li>
				<span> | </span>
			</Menu>
		</Nav>
	);
};

export default Navbar;
