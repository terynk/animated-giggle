import './App.css'
import { FANCY_CUSTOM_STYLE_HOOKS } from './theme/FancyAppCustomStyleHooksValue'
import { FluentProvider, webLightTheme, Button } from '@fluentui/react-components'
import { CustomStyleHooksProvider_unstable } from '@fluentui/react-shared-contexts'

function App() {

  return (
    <>
      <FluentProvider theme={webLightTheme}>
        <CustomStyleHooksProvider_unstable value={FANCY_CUSTOM_STYLE_HOOKS}>
          <Button>Click me I'm Fancy</Button>
        </CustomStyleHooksProvider_unstable>
      </FluentProvider>

    </>
  )
}

export default App
