class Toc {
  /**
   * 初始化
   * @param  {object} options {
   *   wrap: 需要生成toc目录的容器id
   *   insert: 位置id，toc目录面板将插入在此id代表的元素的前面
   *   showSerial： 是否显示目录序号
   * }
   */
  //
  #childH = []; //初始标题数组
  #tocVNode = [];

  constructor({
    wrap = "body",
    insert,
    level_class = "toc_level",
    showSerial = false,
  }) {
    this.wrap = wrap;
    this.insert = insert;
    this.level_class = level_class;
    this.showSerial = showSerial;
    //
    this.init();

    return this.#tocVNode;
  }

  init() {
    this.#getAllH();
    this.#_createChildH(this.#childH, 0);
    this.createToc();
  }

  /**
   * 生成toc目录dom
   */
  createToc() {
    if (!this.#childH.length) {
      return;
    }

    const div = document.createElement("div");
    this._createToc(div, this.#childH, 1, "", this.#tocVNode);

    //
    const tocInsert = document.querySelector(this.insert);
    tocInsert && tocInsert.appendChild(div);
  }
  /**
   * 获取容器中所有的标题
   */
  #getAllH() {
    let child = document.querySelector(this.wrap).firstElementChild;
    // debugger;
    while (child) {
      if (child.nodeName.match(/H[1-6]/)) {
        child.order = parseInt(child.nodeName[1]); //标题大小序号[1,2,3,4,5,6]
        this.#childH.push(child);
      }
      child = child.nextElementSibling;
    }
  }
  /**
   * 创建标题树
   * @param  {object} context [标题树数组]
   * @param  {number} num     [下标]
   */
  #_createChildH(context, num) {
    if (!context || !context[num]) {
      return;
    }
    let first = context[num];
    first.childH = []; //子标题
    //创建子标题
    for (let i = num + 1; i < context.length; i++) {
      if (context[i].order > first.order) {
        let tmp = context.splice(i, 1);
        first.childH = first.childH.concat(tmp);
        i--;
      } else {
        break;
      }
    }

    //递归创建子标题树
    if (first.childH.length) {
      this.#_createChildH(first.childH, 0);
    }

    //检查first的下一个同级标题是否创建过子标题树，没有则创建
    for (let i = num + 1; i < context.length; i++) {
      if (!context[i].childH) {
        this.#_createChildH(context, i);
      }
    }
  }

  /**
   * 递推创建dom
   * @param  {DOM} tocDom     [父元素]
   * @param  {array} context [目录树]
   * @param  {number} level   [层级]
   * @param  {string} number  [序号]
   */
  _createToc(tocDom, context, level, number, VNode) {
    const level_class = this.level_class;
    let num = 1;
    // debugger;
    context.forEach((item, i) => {
      const { innerText } = item;
      const anchor = item.getAttribute("id") || innerText;

      // 给标题元素设置id，以便使用target定位到该元素
      item.setAttribute("id", anchor);

      // 序号
      let serial = number ? number + "." + num : num;
      //
      VNode.push({ anchor, text: anchor, serial: String(serial), num });
      //
      const _serial = this.showSerial ? serial : "";
      //
      let div = document.createElement("div");
      div.setAttribute("class", `${level_class} ${level_class}_${level}`);
      div.innerHTML = `<a href="#${anchor}">
        <span class="${level_class}--serial">${_serial}</span>
        <span class="${level_class}--text">${anchor}</span>
      </a>`;
      tocDom.appendChild(div);

      //
      if (item.childH && item.childH.length) {
        VNode[i].child = [];
        //递归创建目录dom
        this._createToc(div, item.childH, level + 1, serial, VNode[i].child);
      }

      num++; //标题题序号递增
    });
  }
}

export default Toc;
