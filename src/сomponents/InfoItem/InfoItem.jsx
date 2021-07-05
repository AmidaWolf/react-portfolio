import React from 'react';
import styled from 'styled-components';

import {TextBlock} from "../TextBlock/TextBlock";


const InfoItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 4rem;
  .info-item__title {
    display: flex;
    flex: 1;
    font-size: 2.4rem;
    margin-right: 4rem;
  }
  .info-item__items {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    flex: 2;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }
  .item:hover {
    background-color: var(--gray-2);
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .info-item__items {
      position: initial;
      gap: 1rem;
    }
    .info-item__title {
      font-size: 2rem;
    }
  }
`;

export const InfoItem = ({
                             title = 'Title',
                             items = ['1 item', '2 item'],
                       }) => {
    return (
        <InfoItemStyles className={'info-item-wrapper'}>
            <h3 className={"info-item__title"}>{title}</h3>
            <div className={"info-item__items"}>
                {items.map((item, index) => (
                    <div className={"item"} key={index}>
                        <TextBlock>{item}</TextBlock>
                    </div>
                ))}
            </div>
        </InfoItemStyles>
    );
}
