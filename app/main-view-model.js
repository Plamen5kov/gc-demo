var Observable = require("data/observable").Observable;
const app = require("application");

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return counter + " taps left";
    }
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);
    var outputStream = new java.io.FileOutputStream("/data/data/org.nativescript.v8mark/log.txt", true);
    var streamWriter = new java.io.OutputStreamWriter(outputStream);

    viewModel.onTap = function() {

        //stress gc with objects
        for(var i = 0; i < 20000; i++) {
            new java.lang.Object().hashCode();
        }

	  	function createObjects(name) {
            var implementor = new com.tns.Implementor();
            global.implementor = implementor;
            // global.imp = implementor;
			var callback = new com.tns.CallbackInterface(name, {
				getMessage: function() {
                    return global.implementor.getMessage();
                    // return wrapInPromise(implementor)
				}
            });
            
            // function wrapInPromise(impl) {
            //     return new Promise((resolve, reject) => {
            //         setTimeout(function () {
            //             try {
            //                 var result = impl.getMessage();
            //                 // var result = "asdasd"
            //             } catch (e) {objectHandle
            //                 reject("callback call failed!?")
            //             }
            //             resolve(result)
            //         }, 3000)
                    
            //     })
            // }

            // com.tns.TaskExecutor.printMessageWithDelay(callback, 5 * 1000);
            com.tns.TaskExecutor.printMessageWithTimerDelay(callback, 3 * 1000);
            // com.tns.TaskExecutor.printMessageNormal(callback, 4 * 1000);
            // setTimeout(function () {
            //     callback.getMessage().then(function (data) {
            //         console.log(data);
            //     })
            // }, 0)
            // setTimeout(function (data) {
            //         console.log(callback.getMessage());
            // }, 0)
		}
		createObjects("Callback5")
        // createObjects("Callback26")
        gc();
        
        

        this.counter--;
        this.set("message", getMessage(this.counter));
    }

    return viewModel;
}

exports.createViewModel = createViewModel;