import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 2rem 0;
`

export const Grid = styled.div`
	display: grid;
	align-items: center;
	justify-items:center;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 8fr;
	gap: 4.2rem 1.2rem;

	@media (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 680px) {
		grid-template-columns: 1fr;
	}
`

export const Item = styled.div`
	width: 90%;
	height: 100%;
	overflow: hidden;
	box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

	h4 {
		color: #212121;
		
	}

	p {
		color: #707070;
		line-height: 25px;
	}
`

export const Content = styled.div`
	padding: .1rem 0;
	img {
		margin: 10;
		max-width:100%; 
		max-height:100%; 
		display:block;
		margin:auto;
		padding-bottom: 25px;
	};
	.highlight {
		background-color:#EFEEFF;
		padding:4px;
	  }
	
`

export const Stats = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	div {
		display: flex;
		&:first-child {
			margin-right: 1.5rem;
		}

		img {
			margin: 0;
		}

		span {
			color: #000;
			margin-left: 0.5rem;
		}

		input[value="show"]{
			display:none;
			}
	}
`
