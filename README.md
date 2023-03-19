# vue_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


---
### 解决：ERESOLVE unable to resolve dependency tree
使用--force或--legacy-peer-deps可解决这种情况。

    --force 会无视冲突，并强制获取远端npm库资源，当有资源冲突时覆盖掉原先的版本。
    
    --legacy-peer-deps标志是在v7中引入的，目的是绕过peerDependency自动安装；它告诉         NPM 忽略项目中引入的各个modules之间的相同modules但不同版本的问题并继续安装，保            证各个引入的依赖之间对自身所使用的不同版本modules共存。

 建议用--legacy-peer-deps 比较保险一点

在终端输入
```
npm install --legacy-peer-deps  <包名>
```



