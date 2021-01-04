const ZoneA = Zone.current.fork({
    name: 'ZoneA',
    onScheduleTask: function (delegate, currentZone, target, task) {
        delegate.scheduleTask(target, task);
    },
    onInvokeTask: function (delegate, currentZone, target, task, applyThis, applyArgs) {
        console.log('A');
        
        delegate.invokeTask(target, task);
    }
})

const ZoneB = ZoneA.fork({
    name: 'ZoneA',
    onScheduleTask: function (delegate, currentZone, target, task) {
        delegate.scheduleTask(target, task);
    },
    onInvokeTask: function (delegate, currentZone, target, task, applyThis, applyArgs) {
        console.log('B');
        
        delegate.invokeTask(target, task);
    }
})

ZoneB.run(function () {
    setTimeout(() => {
        throw new Error('qwe');
        console.log(123);
    }, 1000);
})