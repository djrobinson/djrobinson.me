import React from "react"
import * as d3 from 'd3'

class Sample extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        test: 'Danny',
      }
    }
    componentDidMount() {
        let svg = d3.select(this._rootNode),
          width = Number(svg.style('width').slice(0, -2)),
          height = Number(svg.style('height').slice(0, -2)),
          innerRadius = 5,
          outerRadius = Math.min(width, height) / 2 - 70,
          g = svg.append('g').attr('transform', 'translate(' + 200 + ',' + height / 2 + ')')
    
        svg.append('text')
          .attr('id', 'chart-title')
          .text('Testy mctesttest')
          .style('font-size', 24)
          .style('font-weight', 'bold')
          .attr('fill', '#e1e1e1')
          .attr('transform', 'translate(' + 400 + ',' + 35 + ')')
    }
    
    _setRef(componentNode) {
        this._rootNode = componentNode
    }

    render() {
        return (
          <div>
            <svg
              className="sample-d3"
              width="876"
              height="460"
              fontFamily="PT Sans"
              fontSize="11"
              fill='#242424'
              ref={this._setRef.bind(this)}
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 876 460"
            />
          </div>
        )
    }
}

export default Sample