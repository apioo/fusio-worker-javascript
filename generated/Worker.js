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


var ttypes = require('./worker_types');
//HELPER FUNCTIONS AND STRUCTURES

var Worker_setConnection_args = function(args) {
  this.connection = null;
  if (args) {
    if (args.connection !== undefined && args.connection !== null) {
      this.connection = new ttypes.Connection(args.connection);
    }
  }
};
Worker_setConnection_args.prototype = {};
Worker_setConnection_args.prototype.read = function(input) {
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
        this.connection = new ttypes.Connection();
        this.connection.read(input);
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

Worker_setConnection_args.prototype.write = function(output) {
  output.writeStructBegin('Worker_setConnection_args');
  if (this.connection !== null && this.connection !== undefined) {
    output.writeFieldBegin('connection', Thrift.Type.STRUCT, 1);
    this.connection.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Worker_setConnection_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Message(args.success);
    }
  }
};
Worker_setConnection_result.prototype = {};
Worker_setConnection_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.Message();
        this.success.read(input);
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

Worker_setConnection_result.prototype.write = function(output) {
  output.writeStructBegin('Worker_setConnection_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Worker_setAction_args = function(args) {
  this.action = null;
  if (args) {
    if (args.action !== undefined && args.action !== null) {
      this.action = new ttypes.Action(args.action);
    }
  }
};
Worker_setAction_args.prototype = {};
Worker_setAction_args.prototype.read = function(input) {
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
        this.action = new ttypes.Action();
        this.action.read(input);
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

Worker_setAction_args.prototype.write = function(output) {
  output.writeStructBegin('Worker_setAction_args');
  if (this.action !== null && this.action !== undefined) {
    output.writeFieldBegin('action', Thrift.Type.STRUCT, 1);
    this.action.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Worker_setAction_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Message(args.success);
    }
  }
};
Worker_setAction_result.prototype = {};
Worker_setAction_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.Message();
        this.success.read(input);
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

Worker_setAction_result.prototype.write = function(output) {
  output.writeStructBegin('Worker_setAction_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Worker_executeAction_args = function(args) {
  this.execute = null;
  if (args) {
    if (args.execute !== undefined && args.execute !== null) {
      this.execute = new ttypes.Execute(args.execute);
    }
  }
};
Worker_executeAction_args.prototype = {};
Worker_executeAction_args.prototype.read = function(input) {
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
        this.execute = new ttypes.Execute();
        this.execute.read(input);
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

Worker_executeAction_args.prototype.write = function(output) {
  output.writeStructBegin('Worker_executeAction_args');
  if (this.execute !== null && this.execute !== undefined) {
    output.writeFieldBegin('execute', Thrift.Type.STRUCT, 1);
    this.execute.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Worker_executeAction_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Result(args.success);
    }
  }
};
Worker_executeAction_result.prototype = {};
Worker_executeAction_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.Result();
        this.success.read(input);
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

Worker_executeAction_result.prototype.write = function(output) {
  output.writeStructBegin('Worker_executeAction_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var WorkerClient = exports.Client = function(output, pClass) {
  this.output = output;
  this.pClass = pClass;
  this._seqid = 0;
  this._reqs = {};
};
WorkerClient.prototype = {};
WorkerClient.prototype.seqid = function() { return this._seqid; };
WorkerClient.prototype.new_seqid = function() { return this._seqid += 1; };

WorkerClient.prototype.setConnection = function(connection, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_setConnection(connection);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_setConnection(connection);
  }
};

WorkerClient.prototype.send_setConnection = function(connection) {
  var output = new this.pClass(this.output);
  var params = {
    connection: connection
  };
  var args = new Worker_setConnection_args(params);
  try {
    output.writeMessageBegin('setConnection', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

WorkerClient.prototype.recv_setConnection = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new Worker_setConnection_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('setConnection failed: unknown result');
};

WorkerClient.prototype.setAction = function(action, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_setAction(action);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_setAction(action);
  }
};

WorkerClient.prototype.send_setAction = function(action) {
  var output = new this.pClass(this.output);
  var params = {
    action: action
  };
  var args = new Worker_setAction_args(params);
  try {
    output.writeMessageBegin('setAction', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

WorkerClient.prototype.recv_setAction = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new Worker_setAction_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('setAction failed: unknown result');
};

WorkerClient.prototype.executeAction = function(execute, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_executeAction(execute);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_executeAction(execute);
  }
};

WorkerClient.prototype.send_executeAction = function(execute) {
  var output = new this.pClass(this.output);
  var params = {
    execute: execute
  };
  var args = new Worker_executeAction_args(params);
  try {
    output.writeMessageBegin('executeAction', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

WorkerClient.prototype.recv_executeAction = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new Worker_executeAction_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('executeAction failed: unknown result');
};
var WorkerProcessor = exports.Processor = function(handler) {
  this._handler = handler;
};
WorkerProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
};
WorkerProcessor.prototype.process_setConnection = function(seqid, input, output) {
  var args = new Worker_setConnection_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.setConnection.length === 1) {
    Q.fcall(this._handler.setConnection.bind(this._handler),
      args.connection
    ).then(function(result) {
      var result_obj = new Worker_setConnection_result({success: result});
      output.writeMessageBegin("setConnection", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("setConnection", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.setConnection(args.connection, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new Worker_setConnection_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("setConnection", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("setConnection", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
WorkerProcessor.prototype.process_setAction = function(seqid, input, output) {
  var args = new Worker_setAction_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.setAction.length === 1) {
    Q.fcall(this._handler.setAction.bind(this._handler),
      args.action
    ).then(function(result) {
      var result_obj = new Worker_setAction_result({success: result});
      output.writeMessageBegin("setAction", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("setAction", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.setAction(args.action, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new Worker_setAction_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("setAction", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("setAction", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
WorkerProcessor.prototype.process_executeAction = function(seqid, input, output) {
  var args = new Worker_executeAction_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.executeAction.length === 1) {
    Q.fcall(this._handler.executeAction.bind(this._handler),
      args.execute
    ).then(function(result) {
      var result_obj = new Worker_executeAction_result({success: result});
      output.writeMessageBegin("executeAction", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("executeAction", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.executeAction(args.execute, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new Worker_executeAction_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("executeAction", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("executeAction", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
