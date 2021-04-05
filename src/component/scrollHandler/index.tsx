var React = require('react');

export class ScrollHandler extends React.Component {
    constructor() {
        super();
        this.myRef = React.createRef()
        this.state = { scrollTop: 0 }
    }
    onScroll = () => {
        const scrollTop = this.myRef.current.scrollTop
        if (scrollTop + window.innerHeight >= document.getElementById('container').scrollHeight) {
            this.props.onScrollBottom(this.props.parent)
        }
    }
    render() {
        return (
            <div id="container"
                ref={this.myRef}
                onScroll={this.onScroll}
                style={{
                    border: '1px solid black',
                    height: this.props.height*0.9,
                    margin: '0px auto',
                    width: '80%',
                    overflow: 'scroll',
                }} >
                {this.props.content}
            </div>
        )
    }
}

export default ScrollHandler