/**
 * Display toast
 * @param {Object} options options
 */
function show(options = undefined) {
    const config = {
        message: options.message || 'succes',
        position: options.position || 'right',
        time: options.time || 2000,
        backgroundColor: options.backgroundColor || '#59497e',
        color: options.color || '#ffffff',
    }
    const toast = document.createElement('div');
    toast.setAttribute('id', 'alertPage');
    toast.style.position = 'fixed';
    toast.style.top = '0px';
    if (config.position === 'left') toast.style.left = '50px';
    else toast.style.right = '50px';
    toast.style.right = '50px';
    toast.style.zIndex = '10002';
    toast.style.padding = '15px';
    toast.style.border = '1px solid transparent';
    toast.style.backgroundColor = config.backgroundColor;
    toast.style.boxShadow = '0 0 5px #91cf91';
    toast.style.color = config.color;
    toast.style.borderRadius = '5px';
    toast.style.transition = 'all 300ms ease-in-out';
    toast.style.transform = 'translateY(-100%)';
    toast.style.opacity = '0';
    toast.innerHTML = config.message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.transform = 'translateY(calc(10px + 100%))';
        toast.style.opacity = '1';
    }, 100);
    setTimeout(() => {
        toast.style.transform = 'translateY(-100%)';
        toast.style.opacity = '0';
    }, config.time);
    setTimeout(() => {
        document.body.removeChild(toast);
    }, (config.time + 1500));
}

module.exports = {
    show: show
};