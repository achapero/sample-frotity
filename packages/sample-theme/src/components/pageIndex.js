import React from "react"
import { connect, Global, css, styled, Head } from "frontity";
import Link from '@frontity/components/link'
import Switch from '@frontity/components/switch'

// pages
import PageList from "./pageList";
import PagePost from "./pagePost";
import PagePage from "./pagePage";

import Loading from "./loading"
import Error from "./error"



const pageIndex = ({state, actions }) => {
  const data = state.source.get(state.router.link)
  // console.log(data)
  // console.log(data.isPost)
  console.log(state.source)

  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
          }
        `}
      />

      <Head>
        <title>NATOY SAKALAM</title>
        <meta
          name="description"
          content="Based on the Frontity step by step tutorial"
        />
      </Head>

      <Header isPostType={data.isPostType} isPage={data.isPage}>
        <HeaderContent>
          <h1>Hello Frontity</h1>
          { state.theme.isUrlVisible
            ? <>
                Current URL: {state.router.link} {" "}
                <Button onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</Button>
              </>
            : <Button onClick={actions.theme.toggleUrl}>Show URL &#x3e;</Button>
          }
          <Menu>
            <Link link="/">Home</Link>
            {/* <Link link="/page/2">More Posts</Link> */}
            <Link link="/test-generated-home-page">Kwik</Link>
            <Link link="/sample-page">Sample Page</Link>
            <Link link="/about-us">About Us</Link>
          </Menu>
        </HeaderContent>
      </Header>

      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <PageList when={data.isArchive} />
          <PagePage when={data.isPage} />
          <PagePost when={data.isPost} />
          <PagePage when={data.isDestinationsArchive} />
          <PagePage when={data.isDestinations} />
          <Error when={data.isError} />
        </Switch>        
      </Main>
    </>
  );
};

export default connect(pageIndex)

const Button = styled.button`
  background: transparent;
  border: none;
  color: #aaa;

  :hover {
    cursor: pointer;
    color: #888;
  }
`

const Header = styled.header`
  background-color: #e5edee;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: ${ props => props.isPostType ? ( props.isPage ? 'lightsteelblue' : 'lightseagreen' ) : 'maroon'};

  h1 {
    color: #4a4a4a;
  }
`
const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`
const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > a {
    margin-right: 1em;
    color: steelblue;
    text-decoration: none;
  }
`