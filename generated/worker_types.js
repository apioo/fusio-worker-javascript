//
// Autogenerated by Thrift Compiler (0.14.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;
var Int64 = require('node-int64');


var ttypes = module.exports = {};
var Message = module.exports.Message = function(args) {
  this.success = null;
  this.message = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
  }
};
Message.prototype = {};
Message.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Message.prototype.write = function(output) {
  output.writeStructBegin('Message');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 1);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 2);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Connection = module.exports.Connection = function(args) {
  this.name = null;
  this.type = null;
  this.config = null;
  if (args) {
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    }
    if (args.config !== undefined && args.config !== null) {
      this.config = Thrift.copyMap(args.config, [null]);
    }
  }
};
Connection.prototype = {};
Connection.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.type = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.MAP) {
        this.config = {};
        var _rtmp31 = input.readMapBegin();
        var _size0 = _rtmp31.size || 0;
        for (var _i2 = 0; _i2 < _size0; ++_i2) {
          var key3 = null;
          var val4 = null;
          key3 = input.readString();
          val4 = input.readString();
          this.config[key3] = val4;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Connection.prototype.write = function(output) {
  output.writeStructBegin('Connection');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.STRING, 2);
    output.writeString(this.type);
    output.writeFieldEnd();
  }
  if (this.config !== null && this.config !== undefined) {
    output.writeFieldBegin('config', Thrift.Type.MAP, 3);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.config));
    for (var kiter5 in this.config) {
      if (this.config.hasOwnProperty(kiter5)) {
        var viter6 = this.config[kiter5];
        output.writeString(kiter5);
        output.writeString(viter6);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Action = module.exports.Action = function(args) {
  this.name = null;
  this.code = null;
  if (args) {
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.code !== undefined && args.code !== null) {
      this.code = args.code;
    }
  }
};
Action.prototype = {};
Action.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.code = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Action.prototype.write = function(output) {
  output.writeStructBegin('Action');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.code !== null && this.code !== undefined) {
    output.writeFieldBegin('code', Thrift.Type.STRING, 2);
    output.writeString(this.code);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Execute = module.exports.Execute = function(args) {
  this.action = null;
  this.request = null;
  this.context = null;
  if (args) {
    if (args.action !== undefined && args.action !== null) {
      this.action = args.action;
    }
    if (args.request !== undefined && args.request !== null) {
      this.request = new ttypes.Request(args.request);
    }
    if (args.context !== undefined && args.context !== null) {
      this.context = new ttypes.Context(args.context);
    }
  }
};
Execute.prototype = {};
Execute.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.action = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.request = new ttypes.Request();
        this.request.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.context = new ttypes.Context();
        this.context.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Execute.prototype.write = function(output) {
  output.writeStructBegin('Execute');
  if (this.action !== null && this.action !== undefined) {
    output.writeFieldBegin('action', Thrift.Type.STRING, 1);
    output.writeString(this.action);
    output.writeFieldEnd();
  }
  if (this.request !== null && this.request !== undefined) {
    output.writeFieldBegin('request', Thrift.Type.STRUCT, 2);
    this.request.write(output);
    output.writeFieldEnd();
  }
  if (this.context !== null && this.context !== undefined) {
    output.writeFieldBegin('context', Thrift.Type.STRUCT, 3);
    this.context.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Request = module.exports.Request = function(args) {
  this.http = null;
  this.rpc = null;
  if (args) {
    if (args.http !== undefined && args.http !== null) {
      this.http = new ttypes.HttpRequest(args.http);
    }
    if (args.rpc !== undefined && args.rpc !== null) {
      this.rpc = new ttypes.RpcRequest(args.rpc);
    }
  }
};
Request.prototype = {};
Request.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.http = new ttypes.HttpRequest();
        this.http.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.rpc = new ttypes.RpcRequest();
        this.rpc.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Request.prototype.write = function(output) {
  output.writeStructBegin('Request');
  if (this.http !== null && this.http !== undefined) {
    output.writeFieldBegin('http', Thrift.Type.STRUCT, 1);
    this.http.write(output);
    output.writeFieldEnd();
  }
  if (this.rpc !== null && this.rpc !== undefined) {
    output.writeFieldBegin('rpc', Thrift.Type.STRUCT, 2);
    this.rpc.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var HttpRequest = module.exports.HttpRequest = function(args) {
  this.method = null;
  this.headers = null;
  this.uriFragments = null;
  this.parameters = null;
  this.body = null;
  if (args) {
    if (args.method !== undefined && args.method !== null) {
      this.method = args.method;
    }
    if (args.headers !== undefined && args.headers !== null) {
      this.headers = Thrift.copyMap(args.headers, [null]);
    }
    if (args.uriFragments !== undefined && args.uriFragments !== null) {
      this.uriFragments = Thrift.copyMap(args.uriFragments, [null]);
    }
    if (args.parameters !== undefined && args.parameters !== null) {
      this.parameters = Thrift.copyMap(args.parameters, [null]);
    }
    if (args.body !== undefined && args.body !== null) {
      this.body = args.body;
    }
  }
};
HttpRequest.prototype = {};
HttpRequest.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.method = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.MAP) {
        this.headers = {};
        var _rtmp38 = input.readMapBegin();
        var _size7 = _rtmp38.size || 0;
        for (var _i9 = 0; _i9 < _size7; ++_i9) {
          var key10 = null;
          var val11 = null;
          key10 = input.readString();
          val11 = input.readString();
          this.headers[key10] = val11;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.MAP) {
        this.uriFragments = {};
        var _rtmp313 = input.readMapBegin();
        var _size12 = _rtmp313.size || 0;
        for (var _i14 = 0; _i14 < _size12; ++_i14) {
          var key15 = null;
          var val16 = null;
          key15 = input.readString();
          val16 = input.readString();
          this.uriFragments[key15] = val16;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.MAP) {
        this.parameters = {};
        var _rtmp318 = input.readMapBegin();
        var _size17 = _rtmp318.size || 0;
        for (var _i19 = 0; _i19 < _size17; ++_i19) {
          var key20 = null;
          var val21 = null;
          key20 = input.readString();
          val21 = input.readString();
          this.parameters[key20] = val21;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.body = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

HttpRequest.prototype.write = function(output) {
  output.writeStructBegin('HttpRequest');
  if (this.method !== null && this.method !== undefined) {
    output.writeFieldBegin('method', Thrift.Type.STRING, 1);
    output.writeString(this.method);
    output.writeFieldEnd();
  }
  if (this.headers !== null && this.headers !== undefined) {
    output.writeFieldBegin('headers', Thrift.Type.MAP, 2);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.headers));
    for (var kiter22 in this.headers) {
      if (this.headers.hasOwnProperty(kiter22)) {
        var viter23 = this.headers[kiter22];
        output.writeString(kiter22);
        output.writeString(viter23);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.uriFragments !== null && this.uriFragments !== undefined) {
    output.writeFieldBegin('uriFragments', Thrift.Type.MAP, 3);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.uriFragments));
    for (var kiter24 in this.uriFragments) {
      if (this.uriFragments.hasOwnProperty(kiter24)) {
        var viter25 = this.uriFragments[kiter24];
        output.writeString(kiter24);
        output.writeString(viter25);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.parameters !== null && this.parameters !== undefined) {
    output.writeFieldBegin('parameters', Thrift.Type.MAP, 4);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.parameters));
    for (var kiter26 in this.parameters) {
      if (this.parameters.hasOwnProperty(kiter26)) {
        var viter27 = this.parameters[kiter26];
        output.writeString(kiter26);
        output.writeString(viter27);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.body !== null && this.body !== undefined) {
    output.writeFieldBegin('body', Thrift.Type.STRING, 5);
    output.writeString(this.body);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var RpcRequest = module.exports.RpcRequest = function(args) {
  this.arguments = null;
  if (args) {
    if (args.arguments !== undefined && args.arguments !== null) {
      this.arguments = args.arguments;
    }
  }
};
RpcRequest.prototype = {};
RpcRequest.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.arguments = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

RpcRequest.prototype.write = function(output) {
  output.writeStructBegin('RpcRequest');
  if (this.arguments !== null && this.arguments !== undefined) {
    output.writeFieldBegin('arguments', Thrift.Type.STRING, 1);
    output.writeString(this.arguments);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Context = module.exports.Context = function(args) {
  this.routeId = null;
  this.baseUrl = null;
  this.app = null;
  this.user = null;
  if (args) {
    if (args.routeId !== undefined && args.routeId !== null) {
      this.routeId = args.routeId;
    }
    if (args.baseUrl !== undefined && args.baseUrl !== null) {
      this.baseUrl = args.baseUrl;
    }
    if (args.app !== undefined && args.app !== null) {
      this.app = new ttypes.App(args.app);
    }
    if (args.user !== undefined && args.user !== null) {
      this.user = new ttypes.User(args.user);
    }
  }
};
Context.prototype = {};
Context.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I64) {
        this.routeId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.baseUrl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.app = new ttypes.App();
        this.app.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRUCT) {
        this.user = new ttypes.User();
        this.user.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Context.prototype.write = function(output) {
  output.writeStructBegin('Context');
  if (this.routeId !== null && this.routeId !== undefined) {
    output.writeFieldBegin('routeId', Thrift.Type.I64, 1);
    output.writeI64(this.routeId);
    output.writeFieldEnd();
  }
  if (this.baseUrl !== null && this.baseUrl !== undefined) {
    output.writeFieldBegin('baseUrl', Thrift.Type.STRING, 2);
    output.writeString(this.baseUrl);
    output.writeFieldEnd();
  }
  if (this.app !== null && this.app !== undefined) {
    output.writeFieldBegin('app', Thrift.Type.STRUCT, 3);
    this.app.write(output);
    output.writeFieldEnd();
  }
  if (this.user !== null && this.user !== undefined) {
    output.writeFieldBegin('user', Thrift.Type.STRUCT, 4);
    this.user.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var App = module.exports.App = function(args) {
  this.id = null;
  this.userId = null;
  this.status = null;
  this.name = null;
  this.url = null;
  this.appKey = null;
  this.scopes = null;
  this.parameters = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.userId !== undefined && args.userId !== null) {
      this.userId = args.userId;
    }
    if (args.status !== undefined && args.status !== null) {
      this.status = args.status;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.url !== undefined && args.url !== null) {
      this.url = args.url;
    }
    if (args.appKey !== undefined && args.appKey !== null) {
      this.appKey = args.appKey;
    }
    if (args.scopes !== undefined && args.scopes !== null) {
      this.scopes = Thrift.copyList(args.scopes, [null]);
    }
    if (args.parameters !== undefined && args.parameters !== null) {
      this.parameters = Thrift.copyList(args.parameters, [null]);
    }
  }
};
App.prototype = {};
App.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I64) {
        this.id = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.userId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.status = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.url = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.appKey = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.LIST) {
        this.scopes = [];
        var _rtmp329 = input.readListBegin();
        var _size28 = _rtmp329.size || 0;
        for (var _i30 = 0; _i30 < _size28; ++_i30) {
          var elem31 = null;
          elem31 = input.readString();
          this.scopes.push(elem31);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.LIST) {
        this.parameters = [];
        var _rtmp333 = input.readListBegin();
        var _size32 = _rtmp333.size || 0;
        for (var _i34 = 0; _i34 < _size32; ++_i34) {
          var elem35 = null;
          elem35 = input.readString();
          this.parameters.push(elem35);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

App.prototype.write = function(output) {
  output.writeStructBegin('App');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I64, 1);
    output.writeI64(this.id);
    output.writeFieldEnd();
  }
  if (this.userId !== null && this.userId !== undefined) {
    output.writeFieldBegin('userId', Thrift.Type.I64, 2);
    output.writeI64(this.userId);
    output.writeFieldEnd();
  }
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.I32, 3);
    output.writeI32(this.status);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 4);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.url !== null && this.url !== undefined) {
    output.writeFieldBegin('url', Thrift.Type.STRING, 5);
    output.writeString(this.url);
    output.writeFieldEnd();
  }
  if (this.appKey !== null && this.appKey !== undefined) {
    output.writeFieldBegin('appKey', Thrift.Type.STRING, 6);
    output.writeString(this.appKey);
    output.writeFieldEnd();
  }
  if (this.scopes !== null && this.scopes !== undefined) {
    output.writeFieldBegin('scopes', Thrift.Type.LIST, 7);
    output.writeListBegin(Thrift.Type.STRING, this.scopes.length);
    for (var iter36 in this.scopes) {
      if (this.scopes.hasOwnProperty(iter36)) {
        iter36 = this.scopes[iter36];
        output.writeString(iter36);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.parameters !== null && this.parameters !== undefined) {
    output.writeFieldBegin('parameters', Thrift.Type.LIST, 8);
    output.writeListBegin(Thrift.Type.STRING, this.parameters.length);
    for (var iter37 in this.parameters) {
      if (this.parameters.hasOwnProperty(iter37)) {
        iter37 = this.parameters[iter37];
        output.writeString(iter37);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var User = module.exports.User = function(args) {
  this.id = null;
  this.roleId = null;
  this.categoryId = null;
  this.status = null;
  this.name = null;
  this.email = null;
  this.points = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.roleId !== undefined && args.roleId !== null) {
      this.roleId = args.roleId;
    }
    if (args.categoryId !== undefined && args.categoryId !== null) {
      this.categoryId = args.categoryId;
    }
    if (args.status !== undefined && args.status !== null) {
      this.status = args.status;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.email !== undefined && args.email !== null) {
      this.email = args.email;
    }
    if (args.points !== undefined && args.points !== null) {
      this.points = args.points;
    }
  }
};
User.prototype = {};
User.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I64) {
        this.id = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.roleId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.categoryId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.status = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.email = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.points = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

User.prototype.write = function(output) {
  output.writeStructBegin('User');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I64, 1);
    output.writeI64(this.id);
    output.writeFieldEnd();
  }
  if (this.roleId !== null && this.roleId !== undefined) {
    output.writeFieldBegin('roleId', Thrift.Type.I64, 2);
    output.writeI64(this.roleId);
    output.writeFieldEnd();
  }
  if (this.categoryId !== null && this.categoryId !== undefined) {
    output.writeFieldBegin('categoryId', Thrift.Type.I64, 3);
    output.writeI64(this.categoryId);
    output.writeFieldEnd();
  }
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.I32, 4);
    output.writeI32(this.status);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 5);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.email !== null && this.email !== undefined) {
    output.writeFieldBegin('email', Thrift.Type.STRING, 6);
    output.writeString(this.email);
    output.writeFieldEnd();
  }
  if (this.points !== null && this.points !== undefined) {
    output.writeFieldBegin('points', Thrift.Type.I32, 7);
    output.writeI32(this.points);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Result = module.exports.Result = function(args) {
  this.response = null;
  this.events = null;
  this.logs = null;
  if (args) {
    if (args.response !== undefined && args.response !== null) {
      this.response = new ttypes.Response(args.response);
    }
    if (args.events !== undefined && args.events !== null) {
      this.events = Thrift.copyList(args.events, [null]);
    }
    if (args.logs !== undefined && args.logs !== null) {
      this.logs = Thrift.copyList(args.logs, [null]);
    }
  }
};
Result.prototype = {};
Result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.response = new ttypes.Response();
        this.response.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        this.events = [];
        var _rtmp339 = input.readListBegin();
        var _size38 = _rtmp339.size || 0;
        for (var _i40 = 0; _i40 < _size38; ++_i40) {
          var elem41 = null;
          elem41 = new ttypes.Event();
          elem41.read(input);
          this.events.push(elem41);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        this.logs = [];
        var _rtmp343 = input.readListBegin();
        var _size42 = _rtmp343.size || 0;
        for (var _i44 = 0; _i44 < _size42; ++_i44) {
          var elem45 = null;
          elem45 = new ttypes.Log();
          elem45.read(input);
          this.logs.push(elem45);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Result.prototype.write = function(output) {
  output.writeStructBegin('Result');
  if (this.response !== null && this.response !== undefined) {
    output.writeFieldBegin('response', Thrift.Type.STRUCT, 1);
    this.response.write(output);
    output.writeFieldEnd();
  }
  if (this.events !== null && this.events !== undefined) {
    output.writeFieldBegin('events', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.events.length);
    for (var iter46 in this.events) {
      if (this.events.hasOwnProperty(iter46)) {
        iter46 = this.events[iter46];
        iter46.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.logs !== null && this.logs !== undefined) {
    output.writeFieldBegin('logs', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRUCT, this.logs.length);
    for (var iter47 in this.logs) {
      if (this.logs.hasOwnProperty(iter47)) {
        iter47 = this.logs[iter47];
        iter47.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Response = module.exports.Response = function(args) {
  this.statusCode = null;
  this.headers = null;
  this.body = null;
  if (args) {
    if (args.statusCode !== undefined && args.statusCode !== null) {
      this.statusCode = args.statusCode;
    }
    if (args.headers !== undefined && args.headers !== null) {
      this.headers = Thrift.copyMap(args.headers, [null]);
    }
    if (args.body !== undefined && args.body !== null) {
      this.body = args.body;
    }
  }
};
Response.prototype = {};
Response.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.statusCode = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.MAP) {
        this.headers = {};
        var _rtmp349 = input.readMapBegin();
        var _size48 = _rtmp349.size || 0;
        for (var _i50 = 0; _i50 < _size48; ++_i50) {
          var key51 = null;
          var val52 = null;
          key51 = input.readString();
          val52 = input.readString();
          this.headers[key51] = val52;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.body = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Response.prototype.write = function(output) {
  output.writeStructBegin('Response');
  if (this.statusCode !== null && this.statusCode !== undefined) {
    output.writeFieldBegin('statusCode', Thrift.Type.I32, 1);
    output.writeI32(this.statusCode);
    output.writeFieldEnd();
  }
  if (this.headers !== null && this.headers !== undefined) {
    output.writeFieldBegin('headers', Thrift.Type.MAP, 2);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.headers));
    for (var kiter53 in this.headers) {
      if (this.headers.hasOwnProperty(kiter53)) {
        var viter54 = this.headers[kiter53];
        output.writeString(kiter53);
        output.writeString(viter54);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.body !== null && this.body !== undefined) {
    output.writeFieldBegin('body', Thrift.Type.STRING, 3);
    output.writeString(this.body);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Event = module.exports.Event = function(args) {
  this.eventName = null;
  this.data = null;
  if (args) {
    if (args.eventName !== undefined && args.eventName !== null) {
      this.eventName = args.eventName;
    }
    if (args.data !== undefined && args.data !== null) {
      this.data = args.data;
    }
  }
};
Event.prototype = {};
Event.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.eventName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.data = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Event.prototype.write = function(output) {
  output.writeStructBegin('Event');
  if (this.eventName !== null && this.eventName !== undefined) {
    output.writeFieldBegin('eventName', Thrift.Type.STRING, 1);
    output.writeString(this.eventName);
    output.writeFieldEnd();
  }
  if (this.data !== null && this.data !== undefined) {
    output.writeFieldBegin('data', Thrift.Type.STRING, 2);
    output.writeString(this.data);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Log = module.exports.Log = function(args) {
  this.level = null;
  this.message = null;
  if (args) {
    if (args.level !== undefined && args.level !== null) {
      this.level = args.level;
    }
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
  }
};
Log.prototype = {};
Log.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.level = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Log.prototype.write = function(output) {
  output.writeStructBegin('Log');
  if (this.level !== null && this.level !== undefined) {
    output.writeFieldBegin('level', Thrift.Type.STRING, 1);
    output.writeString(this.level);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 2);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

