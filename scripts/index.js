

// 插入元素div到id位words-block的元素中,class="words-content"，id="addWordForm"
function insertAddForm() {
  // 增加判断，如果已经存在，则不再添加
  if (document.getElementById('addWordForm')) {
    alert('已经存在');
    return;
  }
    var div = document.createElement('div');
    div.className = 'words-content';
    div.id = 'addWordForm';
    // 给div创建一个输入单词、词性（选择框）、音标、意思的form表单，form表单class为submitWordForm，有一个关闭按钮
    div.innerHTML = `
      <div class="submitWordForm">
        <button class="close" onclick="removeAddForm()">x</button>
        <div class="input">
          <label for="word">单词</label>
          <input type="text" name="word" id="word">
        </div>
        <div class="input">
          <label for="property">词性</label>
          <select name="property" id="property">
            <option value="n.名词">n. 名词</option>
            <option value="v.动词">v. 动词</option>
            <option value="adj.形容词">adj. 形容词</option>
            <option value="adv.副词">adv. 副词</option>
            <option value="prep.介词">prep. 介词</option>
            <option value="conj.连词">conj. 连词</option>
            <option value="pron.代词">pron. 代词</option>
            <option value="art.冠词">art. 冠词</option>
            <option value="num.数词">num. 数词</option>
            <option value="int.感叹词">int. 感叹词</option>
          </select>
        </div>
        <div class="input">
          <label for="pronunciation">音标</label>
          <input type="text" name="pronunciation" id="pronunciation">
        </div>
        <div class="input">
          <label for="meaning">意思</label>
          <input type="text" name="meaning" id="meaning">
        </div>
        <div class="submit">
          <button onclick="sendAddWordRequest()" value="提交">提交</button>
        </div>
      </div>
    `;
    //插入元素div到id位words-block的元素中
    document.getElementById('words-block').appendChild(div);
}
// 移除id为addWordForm的元素
function removeAddForm() {
  debugger;
    var div = document.getElementById('addWordForm');
    if (div) {
        div.parentNode.removeChild(div);
    }
}
// 渲染单词
function rendorWord(danci) {
  // 创建新的 'word-card' 元素
  let wordCard = document.createElement('word-card');

  // 创建并填充 'word' 元素
  let word = document.createElement('word');
  word.textContent = danci.word;
  wordCard.appendChild(word);

  // 创建并填充 'pronunciation' 元素
  let pronunciation = document.createElement('pronunciation');
  pronunciation.textContent = danci.pronunciation;
  wordCard.appendChild(pronunciation);

  // 创建并填充 'property' 元素
  let property = document.createElement('property');
  property.textContent = danci.property;
  wordCard.appendChild(property);

  // 创建并填充 'meaning' 元素
  let meaning = document.createElement('meaning');
  meaning.textContent = danci.meaning;
  wordCard.appendChild(meaning);

  // 将新的 'word-card' 元素添加到 id为words的元素中
  document.getElementById('words').appendChild(wordCard);
}

// 发送添加单词请求
function sendAddWordRequest() {
  var word = {};
  word.word = document.getElementById('word').value;
  word.pronunciation = document.getElementById('pronunciation').value;
  word.property = document.getElementById('property').value;
  word.meaning = document.getElementById('meaning').value;
  console.log(word);
  var result = httpPost('main/addWord', JSON.stringify(word));
  then(result);
  getAllWords();
}
/**
 * 获取所有单词
 */
function getAllWords() {
  var result = httpPost('main/getWords');
  console.log(result)
  let words = result.data.words;
  console.log(words)
  //
  // 渲染单词
  for (let i = 0; i < words.length; i++) {
    rendorWord(words[i]);
  }
}

