/**
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var types = Ext.data.Types;


Ext.define('ArrayModel', {
    extend: 'Ext.data.Model',
    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }  
    },
    fields: [{
        name: 'value', // This objects key in the form elements array.
        type: 'string',
        defaultValue: ''
    }]
});


Ext.define('MapModel', {
    extend: 'Ext.data.Model',
    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }  
    },
    fields: [{
        name: 'key', // This objects key in the form elements array.
        type: 'string',
        defaultValue: ''
    }, {
        name: 'value', // This objects key in the form elements array.
        type: 'string',
        defaultValue: ''
    }]
});

/**
 * PHP Numeric Array.
 */
Ext.data.Types.ARRAY = {
    type: 'array',
    convert: function(v, data) {
        return v instanceof Array ? v : [];
    }
};
/**
 * PHP Map object.
 */
Ext.data.Types.MAP = {
    type: 'map',
    convert: function(v, data) {
        return v instanceof Array ? v : [];
    }
};
/**
 *
 */
Ext.data.Types.AHAH_PROCESS = {
    type: 'AHAH_PROCESS',
    fields: [{
        name: 'type',
        type: 'string'
    }, {
        name: 'message',
        type: 'string'
    }, {
        name: 'url',
        type: 'string'
    }, {
        name: 'interval',
        type: 'string'
    }]
}
/**
 *
 */
Ext.data.Types.AHAH = {
    type: 'AHAH',
    fields: [{
        name: 'effect',
        type: 'string'
    }, {
        name: 'event',
        type: 'string'
    }, {
        name: 'method',
        type: 'string'
    }, {
        name: 'path',
        type: 'string'
    }, {
        name: 'wrapper',
        type: 'string'
    }, {
        name: 'keypress',
        type: 'boolean'
    }, {
        name: 'process',
        type: types.AHAH_PROCESS
    }]
}

/**
 * Form Element Model
 */
Ext.define('Element', {
    extend: 'Ext.data.Model',
    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }  
    },
    fields: [{
        name: 'key', // This objects key in the form elements array.
        type: 'string',
        defaultValue: ''
    }, {
        name: 'text', // The title that appears on the tree view.
        type: 'string',
        defaultValue: ''
    }, {
        name: 'type', // The type of form element this is.
        type: 'string'
    }, {
        name: 'access', // Access Form Control
        type: 'boolean',
        defaultValue: true
    }, {
        name: 'after_build', // After Build Form Control
        type: types.ARRAY
    }, {
        name: 'ahah', 
        type: types.AHAH
    }, {
        name: 'attributes',
        type: types.ARRAY
    }, {
        name: 'autocomplete_path',
        type: 'string'
    }, {
        name: 'button_type',
        type: 'string'
    }, {
        name: 'collapsed',
        type: 'boolean'
    }, {
        name: 'collapsible',
        type: 'boolean'
    }, {
        name: 'cols',
        type: 'int'
    }, {
        name: 'default_value',
        type: 'string'
    }, {
        name: 'delta',
        type: 'int'
    }, {
        name: 'description',
        type: 'string'
    }, {
        name: 'disabled',
        type: 'boolean'
    }, {
        name: 'element_validate',
        type: types.ARRAY
    }, {
        name: 'executes_submit_callback',
        type: 'boolean'
    }, {
        name: 'field_prefix',
        type: 'string'
    }, {
        name: 'field_suffix',
        type: 'string'
    }, {
        name: 'maxlength',
        type: 'int'
    }, {
        name: 'method',
        type: 'string'
    }, {
        name: 'multiple',
        type: 'boolean'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'options',
        type: types.MAP
    }, {
        name: 'post_render',
        type: types.ARRAY
    }, {
        name: 'prefix',
        type: 'string'
    }, {
        name: 'pre_render',
        type: types.ARRAY
    }, {
        name: 'process',
        type: types.ARRAY
    }, {
        name: 'required',
        type: 'boolean'
    }, {
        name: 'resizable',
        type: 'boolean'
    }, {
        name: 'return_value',
        type: 'string'
    }, {
        name: 'rows',
        type: 'int'
    }, {
        name: 'size',
        type: 'int'
    }, {
        name: 'src',
        type: 'string'
    }, {
        name: 'submit',
        type: types.ARRAY
    }, {
        name: 'suffix',
        type: 'string'
    }, {
        name: 'theme',
        type: 'string'
    }, {
        name: 'title',
        type: 'string'
    }, {
        name: 'tree',
        type: 'boolean',
        defaultValue: true
    }, {
        name: 'validate',
        type: types.ARRAY
    }, {
        name: 'value',
        type: 'string'
    }, {
        name: 'weight',
        type: 'int'
    }, {
        name: 'user_data',
        type: types.ARRAY
    }, {
        name: 'actions',
    }],
    associations: [{
        type: 'hasMany',
        model: 'Element',
        associationKey: 'children'
    }, {
        type: 'belongsTo',
        model: 'Element',
        associatedKey: 'parent'
    }]
});

