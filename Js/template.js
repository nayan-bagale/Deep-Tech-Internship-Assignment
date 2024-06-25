export const template = {
  thread: `<div class="thread">
            <div class="thread-head">
                <input class="collapse" type="checkbox" id="card-collapsible">
                <label class="card-collapsible" for="card-collapsible">
                    <img src="./assests/Vector.png" alt="arrow">
                </label>
                <h2>Thread A</h2>
            </div>
            <hr>
            <div class="thread-content">
                <div class="thread-sub-cards">
                    <div class="thread-sub-card">
                        <label for="thread1">Sub thread 1</label>
                        <textarea class="thread-textarea" name="thread1" id="thread1"
                            placeholder="Enter Text here"></textarea>
                    </div>
                    <div class="thread-sub-card">
                        <label for="thread2">Sub thread 1</label>
                        <textarea class="thread-textarea" name="thread2" id="thread2"
                            placeholder="Enter Text here"></textarea>
                    </div>
                </div>
                <div class="thread-icons-select">
                    <div class="thread-icons">
                        <img src="./assests/flower.png" alt="flower">
                        <img src="./assests/question-msg.png" alt="qmsg">
                        <img src="./assests/msg.png" alt="msg">
                        <img src="./assests/bulb.png" alt="bulb">
                    </div>
                    <div>
                        <select>
                            <option value="se">Volvo</option>
                        </select>
                        <select>
                            <option value="volvo">Volvo</option>
                        </select>
                    </div>
                </div>
                <div class="sub-button">
                    <button>+ Sub-thread</button>
                </div>
                <div class="thread-sub-large">
                    <label for="summary">Summary for Thread A</label>
                    <textarea class="thread-textarea" name="summary" id="summary"
                        placeholder="Enter Text here"></textarea>
                </div>
            </div>
        </div>`,
  structure: `<div class="card-structure">
            <div class="title-block">
                <label for="title">Title</label>
                <input type="text" id="title">
            </div>
            <div class="content">
                <h4>Content</h4>
                <div class="content-box">
                    <div class="content-menus">
                        <div class="content-buttons1">
                            <button>File</button>
                            <button>Edit</button>
                            <button>View</button>
                            <button>Insert</button>
                            <button>Format</button>
                            <button>Tools</button>
                            <button>Table</button>
                            <button>Help</button>
                        </div>
                        <div class="content-buttons2">
                            <img src="./assests/arrow-curve.png" alt="arrow">
                            <img src="./assests/arrow-curve.png" alt="arrow">
                            <img src="./assests/arrow-expand-02.png" alt="arrow-expand">
                            <p>Paragraph</p>
                            <button>
                                <div class="dot-menu">
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                </div>
                            </button>
                        </div>
                    </div>

                    <textarea class="content-textarea" name="content" id="textarea"></textarea>

                </div>
            </div>
        </div>`,
  _4sa: `<div class=" cards-4sa">
                            <div class="card-4sa">
                                <div class="card-4sa-head">
                                    <input class="collapse" type="checkbox" id="intro-4sa-collapsible">
                                    <label class="card-4sa-collapsible" for="intro-4sa-collapsible">
                                        <img src="./assests/Vector.png" alt="arrow">
                                    </label>
                                    <h2>Introduction</h2>
                                </div>
                                <div class="card-4sa-content">
                                    <p>The 4SA Method , How to bring a idea into progress ?</p>
                                    <button>See More</button>
                                </div>
                            </div>
                            <div class="card-4sa">
                                <div class="card-4sa-head">
                                    <input class="collapse" type="checkbox" id="thread-4sa-collapsible">
                                    <label class="card-4sa-collapsible" for="thread-4sa-collapsible">
                                        <img src="./assests/Vector.png" alt="arrow">
                                    </label>
                                    <h2 class="thread-4sa">Thread A</h2>
                                </div>
                                <div class="card-4sa-content">
                                    <p>How are you going to develop your stratergy ? Which method are you going to use
                                        to
                                        develop a stratergy ? What if the
                                        project is lengthy?</p>
                                    <button>See More</button>
                                    <div class="card-content-examples">
                                        <div class="example">
                                            <h4>Example 1</h4>
                                            <p>You have a concept , How will you put into progress?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
          </div>`,
};
