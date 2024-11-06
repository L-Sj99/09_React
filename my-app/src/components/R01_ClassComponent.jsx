import React, { Component } from 'react';
// -> node_modules 폴더에서 'react' 관련 라이브러리를 얻어와 해당 페이지에서 사용할건데 사용 시 이름을 React, Component라고 지정하겠다라는 의미
// node_modules : Node.js에서 프로젝트가 의존하여 받은 패키지, 라이브러리가 저장된 폴더
// node_modules 폴더에서 'react' 관련 모듈 중 React, Component를 얻어와 사용(사용 시 이름도 React, Component)
/** [클래스형 컴포넌트 만들기]
 * React.Component 클래스를 상속받아 구현(React는 생략해서 사용 가능) 클래스형 컴포넌트 만들기
 * 1. extends Component (import 받은 Component 상속하기)
 * 2. render() 함수 작성하기(필수) : render() 함수 : return 되는 html형식의 코드(jsx, js + xml)를 화면에 출력하는 함수
 * - 화면이 변경되어야 할 시점에 자동으로 호출됨
 * 3. 만든 class를 export default 지정하기
 *  ** Component를 상속 받은 하위 클래스에 반드시 있어야 하는 함수**
 */

class ComponentEx extends Component {
  // 생성자 함수
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  /* 이벤트 핸들러 */
  clickHandler = () => {
    this.setState({count : this.state.count + 1});
  }
  render() {
    return (
      <>
        {/* <></> == fragment(해석되면 사라짐, 묶음 용도) */}
        <h2>클래스형 컴포넌트 입니다</h2>
        <h2>{this.state.count}</h2>
        <button onClick={this.clickHandler}>1 증가</button>
      </>
    );
  }
}
// ComponentEx 라는 컴포넌트를 내보내겠다는 의미 -> 다른 .js/.jsx 파일에서 해당 컴포넌트를 import해서 사용 가능
export default ComponentEx;