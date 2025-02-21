import './App.css'
import { FANCY_CUSTOM_STYLE_HOOKS } from './theme/FancyAppCustomStyleHooksValue'
import { FluentProvider, Button } from '@fluentui/react-components'
import { CustomStyleHooksProvider_unstable } from '@fluentui/react-shared-contexts'
import { customTheme } from './theme/tokens'

function App() {

  return (
    <>
      <FluentProvider theme={customTheme}>
        <CustomStyleHooksProvider_unstable value={FANCY_CUSTOM_STYLE_HOOKS}>
          <Button>Click me I'm Fancy</Button>
        </CustomStyleHooksProvider_unstable>
      </FluentProvider>

    </>
  )
}

export default App
