import React from "react";
import "../../css/navigator/Navigator.css";

/**
 * 카테고리 네비게이터 컴포넌트
 * @author 주민지
 */

export default function Navigator() {
  return (
    <div>
      <header>
        <nav className="Nav">
          <span className="Nav_title">Citizen Blog</span>
          <div className="Navi">
            <a className="Navs" href="#intro">
              소개글
            </a>
            <a className="Navs" href="#cc">
              2cc
            </a>
            <a className="Navs" href="#wagle">
              와글와글
            </a>
            <a className="Navs" href="#coming">
              ...
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
