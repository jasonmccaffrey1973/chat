export const colors = [
    {
        name: 'primary',
        value: 'hsla(211,100%,50%, 1.00)'
    },{
        name: 'secondary',
        value: 'hsla(208, 7%, 46%, 1.00)'
    },{
        name: 'success',
        value: 'hsla(134, 61%, 41%, 1.00)'
    },{
        name: 'danger',
        value: 'hsla(354, 70%, 54%, 1.00)'
    },{
        name: 'warning',
        value: 'hsla(45, 100%, 51%, 1.00)'
    },{
        name: 'info',
        value: 'hsla(188, 78%, 41%, 1.00)'
    },{
        name: 'light',
        value: 'hsla(210, 17%, 98%, 1.00)'
    },{
        name: 'dark',
        value: 'hsla(210, 10%, 23%, 1.00)npm'
    },{
        name: 'white',
        value: 'hsla(0, 0%, 100%, 1.00)'
    },{
        name: 'black',
        value: 'hsla(0, 0%, 0%, 1.00)'
    }
]


export const getColor = (color) => {
    if (!color) return colors[0].value
    const themeColor  = colors.find(c => c.name === color)
    return themeColor ? themeColor.value : colors[0].value
}