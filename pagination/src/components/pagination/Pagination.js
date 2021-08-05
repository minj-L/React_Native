import React from "react";
import styled from 'styled-components';

const PageUl = styled.ul`
  float:left;
  width: 500px;
  list-style:none;
  text-align:center;
  border-radius:3px;
  color:white;
  padding:3px;
  border-top:3px solid #186EAD;
  border-bottom:3px solid #186EAD;
  background-color: rgba(0,0,0,0.4);
`;

const PageLi = styled.li`
  display:inline-block;
  font-size:17px;
  font-weight:600;
  border-radius:5px;
  width:40px;
  &:hover{
    cursor:pointer;
    color:'#000';
    background-color:#000;
  }
  &:focus::after{
    color:'#000';
    background-color:#000;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after{
    border-radius:100%;
    color:white;
    background-color:#263A6C;
  }
`;

/**
 * 하단 페이지네이션 컴포넌트
 * @author 주민지
 */

export default function Pagination ({ postsPerPage, totalPosts, paginate }) {
  //괄호 안 중괄호는 매개변수
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    //Math.ceil() 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 수를 integer로 반환
    //리스트 하단 숫자들이 몇개가 표시될지 정해줌, 게시물이 늘어날 수록 늘어남
    pageNumbers.push(i);
  }

  return (
    <div >
      <nav >
      <PageUl className="pagination">
        {pageNumbers.map((number) => (
          <PageLi key={number} className="page-item">
            <PageSpan onClick={() => paginate(number)} href="#!" className="page-link">
              {/* <a> 태그의 href 속성은 링크된 페이지의 URL을 명시합니다.*/}
              {number}
            </PageSpan>
          </PageLi>
        ))}
      </PageUl>
    </nav>
    </div>
  );
};
