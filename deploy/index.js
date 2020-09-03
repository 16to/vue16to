const Client = require("ssh2").Client;
const connect = new Client();

// 链接配置
const server = {
  host: "112.124.15.121", // 服务器地址
  port: 22, // 端口号
  username: "root", // 用户名
  privateKey: require("fs").readFileSync("/Users/zj/.ssh/id_rsa"), // 秘钥文件
};

// 执行的任务列表
const commonds = [
  "cd /www/web/vue16to/",
  "git pull",
  "npm install",
  "pm2 restart vue16to",
];

// 连接
function conn() {
  // 连接服务器
  connect
    .on("ready", () => {
      console.log("*******连接主机*******");
      deploy();
    })
    .on("error", (err) => {
      console.error(err);
      console.log("*******连接出错*******");
    })
    .on("end", () => {
      console.log("*******连接关闭*******");
    })
    .on("close", (err) => {
      if (err) {
        console.log("*******连接出错*******");
      }
    })
    .connect(server);
}

// 部署
function deploy() {
  connect.shell((err, stream) => {
    if (err) throw err;
    let buf = "";
    stream
      .on("close", (err) => {
        connect.end();
        if (err) {
          console.error(err);
          return;
        }
        console.info("*******部署成功*******");
      })
      .on("data", (data) => {
        buf += data;
        // console.log(buf); // 调试用，可以写到日志中
      });
    // 执行命令行
    console.info("*******执行命令*******");
    commonds.forEach((sh) => {
      console.log(sh);
      stream.write(sh + "\n");
    });
    stream.write("exit\n");
  });
}

console.log("*******开始部署*******");
conn();