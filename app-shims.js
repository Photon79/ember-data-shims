/* globals define, DS */
(function() {
  function processEmberDataShims() {
    var shims = {
      'ember-data': {
        'default': DS
      },
      'ember-data-shims/utils': {
        'BuildURLMixin': DS.BuildURLMixin,
        'InternalModel': DS.InternalModel,
        'Relationship': DS.Relationship,
        'RootState': DS.RootState,
        'Snapshot': DS.Snapshot
      },
      'ember-data-shims/model': {
        'default': DS.Model
      },
      'ember-data-shims/adapter': {
        'default': DS.Adapter,
        'JSONAPIAdapter': DS.JSONAPIAdapter,
        'RESTAdapter': DS.RESTAdapter
      },
      'ember-data-shims/serializer': {
        'default': DS.Serializer,
        'JSONSerializer': DS.JSONSerializer,
        'JSONAPISerializer': DS.JSONAPISerializer,
        'RESTSerializer': DS.RESTSerializer
      }
      'ember-data-shims/store': {
        'default': DS.Store
      },
      'ember-data-shims/transform': {
        'default': DS.Transform,
        'BooleanTransform': DS.BooleanTransform,
        'DateTransform': DS.DateTransform,
        'NumberTransform': DS.NumberTransform,
        'StringTransform': DS.StringTransform
      },
      'ember-data-shims/attrs': {
        'default': DS.attr,
        'belongsTo': DS.belongsTo,
        'hasMany': DS.hasMany
      },
      'ember-data-shims/promises': {
        'PromiseArray': DS.PromiseArray,
        'PromiseManyArray': DS.PromiseManyArray,
        'PromiseObject': DS.PromiseObject
      },
      'ember-data-shims/errors': {
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
      'ember-data-shims/mixins': {
        'EmbeddedRecordsMixin': DS.EmbeddedRecordsMixin
      },
      'ember-data-shims/arrays': {
        'default': DS.RecordArray,
        'AdapterPopulatedRecordArray': DS.AdapterPopulatedRecordArray,
        'FilteredRecordArray': DS.FilteredRecordArray,
        'ManyArray': DS.ManyArray,
        'RecordArrayManager': DS.RecordArrayManager
      },
      'ember-data-shims/debug': {
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
