import styled from "styled-components";
import Link from "next/link";

function Header() {
    return (
        <Container>
            <Nav>
                <Link href={"/"}>
                    <a>홈</a>
                </Link>
                <Link href={"/search/a"}>
                    <a>a</a>
                </Link>
                <Link href={"/search/b"}>
                    <a>b</a>
                </Link>
            </Nav>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #fff;
`;

const Nav = styled.div`
  display: flex;
  border-bottom: 1px solid #000;

  a {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 20px;
  }
`;

export default Header;