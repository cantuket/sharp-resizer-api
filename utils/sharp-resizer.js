export function formatSharpParams(resizeParams) {
    const paramFormats = {
        width: {
            formatFunc: (p) => parseInt(p)
        },
        height: {
            formatFunc: (p) => parseInt(p)
        },
        fit: {
            allowedValues: ['cover', 'contain', 'fill', 'inside', 'outside']
        }
    }

    const formattedParams = Object.entries(resizeParams).reduce((acc,[key, val]) => {
        const formatter = paramFormats[key]
        if (!formatter) {
            throw new Error(`Resizer option ${key} is not supported`)
        }

        const { allowedValues, formatFunc } = formatter
        if (allowedValues) {
            if (!allowedValues.includes(val)) {
                throw new Error(`Resizer option ${key} has a value (${val}) that is not allowed `)
            }
        }

        return {
            ...acc,
            [key]: formatFunc ? formatFunc(val) : val
        }
    }, {})

    return formattedParams
}