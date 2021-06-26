import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const FooterColStyle = styled.div`
  .col-title {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a{
    font-size: 1.8rem;
    border-bottom: 2px solid var(--gray-1);
  }
  
  a:hover{
    color: var(--white);
    border-bottom: 2px solid var(--white);
  }
`;

export const FooterCol = ({
                              mainTitle = 'Col Main Title',
                              links = [
                                  {
                                      type: 'Link',
                                      title: 'Home',
                                      path: '/home',
                                  },
                                  {
                                      type: 'Link',
                                      title: 'About',
                                      path: '/about',
                                  },
                              ],
                          }) => {
    return (
        <FooterColStyle className={'col-wrapper'}>
            <h2 className={'col-title'}>{mainTitle}</h2>
            <ul>
                {links.map((item, index) => (
                    <li key={index}>
                        {item.type === 'Link' ? (
                            <Link to={item.path}>{item.title}</Link>
                        ) : (
                            <a href={item.path} target={'_blank'} rel={'noreferrer'}>
                                {item.title}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </FooterColStyle>
    );
}
