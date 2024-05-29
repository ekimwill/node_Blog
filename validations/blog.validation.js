    const joi =require('joi')
    const createBlogSchema={
        body:joi.object().keys({
            title:joi.string().required(),
            descriptions:joi.string().required()
        })
    }

    module.exports={createBlogSchema};