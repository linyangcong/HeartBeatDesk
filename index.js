const { app, BrowserWindow ,ipcMain,dialog,shell } = require('electron')
// var process=require('process')
// var play=require('play')
// var player = require('play-sound')(opts = {})
// var baudio = require('baudio');
// const play = require('audio-play');


ipcMain.on('hello',(e)=>{
	
	// shell.beep()

e.sender.send('echo')
	
	// audio_bg.play()
	// console.log(audio_bg)
	// process.stdout.write('\x07');
	
	
	// dialog.showOpenDialog(null, { 
	// 	properties: ['openFile', 'showHiddenFiles'],
	// 	 filters: [{ name: 'Text', extensions: ['html', 'js', 'json', 'md'] }] })


// dialog.showMessageBox({
// 	type:"info",
// 	buttons:[],
// 	title :"hello world",
// 	message:"I have a apple!",
// 	detail:"i have a peach"
// 	})


// 	var n = 0;
// var b = baudio(function (2) {
//     var x = Math.sin(t * 262 + Math.sin(n));
//     n += Math.sin(t);
//     return x;
// });
// b.play('WindowNotify.wav')


	// var p = path.join("./",'WindowNotify.wav');
 //        var sound = spawn("d:\\Dest\\VLCPortable\\App\\vlc\\vlc.exe", ["--play-and-exit", p]);
 //        sound.on('exit', function(){
 //            console.log('played');
 //        });
	
	
	
	// play.sound('./WindowNotify.wav');
	
	
// 	var audio = player.play('WindowNotify.wav', function(err){
//   if (err && !err.killed) throw err
// })
// audio.kill()
// 


	
})


function createWindow () {   
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 800,
    height: 600,
	devtool:true,
	frame:true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 加载index.html文件
   win.loadURL('http://192.168.0.109:8080/#/')
	// win.loadFile('index.html')
}

app.on('ready', createWindow)