export const defaultConfig = {
  pageWidth: 750,
  pageHeight: 1334,
  pageFontSize: 32,
  mode: "portrait" // 默认竖屏模式
}

export const flexible = (config = defaultConfig) => {
  const {
    pageWidth = defaultConfig.pageWidth,
    pageHeight = defaultConfig.pageHeight,
    pageFontSize = defaultConfig.pageFontSize,
    mode = defaultConfig.mode
  } = config
  const pageAspectRatio =
    defaultConfig.pageAspectRatio || pageWidth / pageHeight
  // 根据屏幕大小及dpi调整缩放和大小
  function onResize() {
    let clientWidth = document.documentElement.clientWidth
    let clientHeight = document.documentElement.clientHeight

    // 该页面需要强制横屏
    if (mode === "landscape") {
      if (clientWidth < clientHeight) {
        ;[clientWidth, clientHeight] = [clientHeight, clientWidth]
      }
    }

    let aspectRatio = clientWidth / clientHeight

    // 根元素字体
    let e = 16
    if (clientWidth > pageWidth) {
      // ipad/pc
      e = pageFontSize * (clientHeight / pageHeight)
    } else if (aspectRatio > pageAspectRatio) {
      // 宽屏移动端
      e = pageFontSize * (clientHeight / pageHeight)
    } else {
      // 正常移动端
      e = pageFontSize * (clientWidth / pageWidth)
    }

    e = parseFloat(e.toFixed(3))

    document.documentElement.style.fontSize = `${e}px`
    let realitySize = parseFloat(
      window.getComputedStyle(document.documentElement).fontSize
    )
    if (e !== realitySize) {
      e = (e * e) / realitySize
      document.documentElement.style.fontSize = `${e}px`
    }
  }

  const handleResize = () => {
    onResize()
  }

  window.addEventListener("resize", handleResize)
  onResize()
  return (defaultSize) => {
    window.removeEventListener("resize", handleResize)
    if (defaultSize) {
      if (typeof defaultSize === "string") {
        document.documentElement.style.fontSize = defaultSize
      } else if (typeof defaultSize === "number") {
        document.documentElement.style.fontSize = `${defaultSize}px`
      }
    }
  }
}
