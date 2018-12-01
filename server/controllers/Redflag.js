import RedflagModel from '../models/Redflag';

const Redflag = {
    // Create redflag
    create(req, res) {
        if (!req.body.type || !req.body.title || !req.body.address
            || !req.body.location || !req.body.comment) {
            return res.status(400).json({
                status: 400,
                message: 'Please fill in all required fields',
            });
        }
        const redflag = RedflagModel.create(req.body);
        return res.status(201).json({
            status: 201,
            data: [{
                id: redflag.id,
                message: 'New red-flag has been created',
                redflag,
            }],
        });
    },

    // get all redflags
    getAll(req, res) {
        const redflag = RedflagModel.findAll();
        if (redflag.length < 1) {
            return res.status(404).json({
                status: 404,
                message: 'There are no records to display',
            });
        }
        return res.status(200).json({
            status: 200,
            data: [{
                id: redflag.id,
                message: 'All redflags fetched',
                redflag,
            }],
        });
    },

    // get a specific redflag
    getOne(req, res) {
        const redflag = RedflagModel.findOne(req.params.id);
        if (!redflag) {
            return res.status(404).send({ status: 404, message: 'redflag not found' });
        }
        return res.status(200).json({
            status: 200,
            data: [{
                id: redflag.id,
                message: `Red-flag  ${redflag.id}  fetched`,
                redflag,
            }],
        });
    },

    // updated redflag

    update(req, res) {
        const redflag = RedflagModel.findOne(req.params.id);

        if (!redflag) {
            return res.status(404).send({ status: 404, message: 'redflag not found' });
        }
        if (redflag.status !== 'draft') {
            return res.status(400).send({ status: 400, message: 'You can no longer edit this Redflag' });
        }

        if (!req.body.address
            || !req.body.location || !req.body.comment) {
            return res.status(400).json({
                status: 400,
                message: 'Fields cannot be blank',
            });
        }

        const updatedRedflag = RedflagModel.update(req.params.id, req.body);
        return res.status(200).json({
            status: 200,
            data: [{

                id: redflag.id,
                message: 'Red-flag has been updated',
                updatedRedflag,
            }],
        });

        // RedflagModel.update(req.params.id, req.body);
        // if (req.body.location) {
        //     return res.status(200).send({
        //         status: 200,
        //         data: [{
        //             id: redflag.id,
        //             message: `Location has been updated to ${redflag.location}}`,
        //         }],
        //     });
        // }

        // return res.status(200).send({
        //     status: 200,
        //     data: [{
        //         id: redflag.id,
        //         message: `Comment has been updated to ${redflag.comment}}`,
        //     }],
        // });
    },

    // delete a redflag
    delete(req, res) {
        const redflag = RedflagModel.findOne(req.params.id);
        if (!redflag) {
            return res.status(404).send({ status: 404, message: 'redflag not found' });
        }
        const delRedflag = RedflagModel.delete(req.params.id);
        return res.status(204).json({
            status: 204,
            data: [{
                id: `${redflag.id}`,
                message: 'Red-flag deleted successfully',
                delRedflag,
            }],

        });
    },
};

export default Redflag;
