-- what is the problem before 'official'

    "react-native-image-picker": "^2.3.4"
    index.js
    "react-native-reanimated": "1.13.1",

--- current logs

[Tue Oct 13 2020 21:34:34.720]  WARN     Warning: componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.

Please update the following components: %s ActionSheet
[Tue Oct 13 2020 21:34:55.651]  LOG      [Error: timeout of 3000ms exceeded]
[Tue Oct 13 2020 21:35:41.453]  LOG      VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc. {"contentLength": 2543.5, "dt": 869, "prevDt": 2963}

--- Future bug fix notes

react-native-actionsheet 2.4.2
"^" in package.json may be wrong

