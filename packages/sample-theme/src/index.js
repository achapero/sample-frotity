import pageIndex from './components/pageIndex'
import link from "@frontity/html2react/processors/link";

const indexTheme = {
  name: 'sample-theme',
  roots: {
    theme: pageIndex,
  },
  state: {
    theme: {
      isUrlVisible: false,
    }
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      }
    }
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
}

export default indexTheme
