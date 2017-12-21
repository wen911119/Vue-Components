
export default {
    functional: true,
    props: {
        gap: {
            type: Number | String,
            default: 20
        },
        unit: {
            type: String,
            default: 'px'
        }
    },
    render(h, context) {
        let gap = h('div', {
            style: {
                height: context.props.gap + context.props.unit
            }
        })
        return context.children.map(item => {
            if (item.tag) {
                return item
            } else {
                return gap
            }
        })
    }
}

function arrayIntervalInterpolation(arr, insert) {
    let temp = arr.map((item, index) => {
        return index
    })
    temp = temp.join('-').split('').map(item => {
        if (item === '-') {
            return insert
        } else {
            return arr[item]
        }
    })
    return temp
}
