import React, { useReducer } from 'react';
import styled from 'styled-components';

import Dnd from './Dnd';
import reducer from '../../reducers/reducer.js';

const DndWrapper = () => {
	const [data, dispatch] = useReducer(reducer, { imgUrl: ''});

	const onChange = (url) => {
		dispatch({ type: 'SET_IMG', imgUrl: url })
	}

  return (
    <Wrapper>
			<div className="wrapper">
				<div className="wrapper__header">
					<h2>Company Logo</h2>
					<p>Logo should be square, 100px size and in png, jpeg file format.</p>
				</div>
				<div className="wrapper__content">
					<Dnd imgUrl={data.imgUrl} onChange={onChange}/>
				</div>
			</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
	.wrapper {
		background-color: #fff;
		border: 1px solid #E8F1FB;
		font-family: 'Proxima Nova Regular';
		width: 400px;
		&__header {
			border-bottom: 1px solid #E8F1FB;
			padding: 21px 25px 18px 30px;
			h2 {
				color: #1A2533;
				font-size: 20px;
				font-family: 'Proxima Nova Bold';
				margin: 0;
			}
			p {
				color: #6B85A3;
				font-size: 12px;
				margin: 0;
			}
		}
	}
`

export default DndWrapper;