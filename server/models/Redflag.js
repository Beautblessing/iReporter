import moment from 'moment';

import uuid from 'uuid';

// const date = new Date();

class Redflag {
    // class constructor

    constructor() {
        this.redflags = [];
    }

    // return redflags object

    create(data) {
        const newRedflag = {
            id: uuid.v4(),
            userId: data.userId || '',
            type: data.type || '',
            title: data.title || '',
            address: data.address || '',
            location: data.location || '',
            images: data.images || '',
            videos: data.videos || '',
            comment: data.comment || '',
            status: data.status || 'draft',
            createdOn: moment(new Date(), 'MM-dd-yyyy'),
            modifiedOn: moment(new Date(), 'MM-dd-yyyy'),
            // createdOn: moment.now(),
            // modifiedOn: moment.now('dddd'),
        };
        this.redflags.push(newRedflag);
        return newRedflag;
    }

    // returns a specific redflag report

    findOne(id) {
        return this.redflags.find(redflag => redflag.id === id);
    }

    // returns all redflag reports

    findAll() {
        return this.redflags;
    }

    // update a specific redflag

    update(id, data) {
        const redflag = this.findOne(id);
        const index = this.redflags.indexOf(redflag);
        this.redflags[index].address = data.address || redflag.address;
        this.redflags[index].location = data.location || redflag.location;
        this.redflags[index].comment = data.comment || redflag.comment;
        this.redflags[index].modifiedOn = moment(new Date(), 'MM-dd-yyyy');
        return this.redflags[index];
    }

    // deletes a specific redflag

    delete(id) {
        const redflag = this.findOne(id);
        const index = this.redflags.indexOf(redflag);
        this.redflags.splice(index, 1);
        return {};
    }
}
export default new Redflag();
