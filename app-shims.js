/* globals define, DS */
(function() {
  function processEmberDataShims() {
    var shims = {
      'ember-data': {
        'default': DS
      },
      'ember-data/utils': {
        'BuildURLMixin': DS.BuildURLMixin,
        'InternalModel': DS.InternalModel,
        'Relationship': DS.Relationship,
        'RootState': DS.RootState,
        'Snapshot': DS.Snapshot
      },
      'ember-data/model': {
        'default': DS.Model
      },
      'ember-data/adapter': {
        'default': DS.Adapter,
        'JSONAPIAdapter': DS.JSONAPIAdapter,
        'RESTAdapter': DS.RESTAdapter
      },
      'ember-data/serializer': {
        'default': DS.Serializer,
        'JSONSerializer': DS.JSONSerializer,
        'JSONAPISerializer': DS.JSONAPISerializer,
        'RESTSerializer': DS.RESTSerializer
      }
      'ember-data/store': {
        'default': DS.Store
      },
      'ember-data/transform': {
        'default': DS.Transform,
        'BooleanTransform': DS.BooleanTransform,
        'DateTransform': DS.DateTransform,
        'NumberTransform': DS.NumberTransform,
        'StringTransform': DS.StringTransform
      },
      'ember-data/attrs': {
        'default': DS.attr,
        'belongsTo': DS.belongsTo,
        'hasMany': DS.hasMany
      },
      'ember-data/promises': {
        'PromiseArray': DS.PromiseArray,
        'PromiseManyArray': DS.PromiseManyArray,
        'PromiseObject': DS.PromiseObject
      },
      'ember-data/errors': {
        'default': DS.Errors,
        'AbortError': DS.AbortError,
        'AdapterError': DS.AdapterError,
        'ConflictError': DS.ConflictError,
        'ForbiddenError': DS.ForbiddenError,
        'InvalidError': DS.InvalidError,
        'NotFoundError': DS.NotFoundError,
        'ServerError': DS.ServerError,
        'TimeoutError': DS.TimeoutError,
        'UnauthorizedError': DS.UnauthorizedError,
        'errorsHashToArray': DS.errorsHashToArray,
        'errorsArrayToHash': DS.errorsArrayToHash
      },
      'ember-data/mixins': {
        'EmbeddedRecordsMixin': DS.EmbeddedRecordsMixin
      },
      'ember-data/arrays': {
        'default': DS.RecordArray,
        'AdapterPopulatedRecordArray': DS.AdapterPopulatedRecordArray,
        'FilteredRecordArray': DS.FilteredRecordArray,
        'ManyArray': DS.ManyArray,
        'RecordArrayManager': DS.RecordArrayManager
      },
      'ember-data/debug': {
        'default': DS.DebugAdapter
      }
    };

    for(let moduleName in shims) {
      generateModule(moduleName, shims[moduleName]);
    }
  }

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      Object.defineProperty(values, '__esModule', {
        value: true
      });

      return values;
    });
  }

  processEmberDataShims();
})();
