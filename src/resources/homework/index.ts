import { NewHomework } from 'src/types/homework';
import { BaseResource } from '../base';
import { createHomework } from './createHomework';
import { getAllHomework } from './getAllHomework';
import { getPagedHomework } from './getPagedHomework';
import { deleteHomework } from './deleteHomework';

/**
 * Homework class
 * @classdesc The homework class for the Dlool SDK. On this class, you can run operations related to homework
 * @class
 */
export class Homework extends BaseResource {
    /**
     * A function to get all the homework for a specific class
     * @param {{ class: string; school: string }} options - The options for the getAllHomework method
     * @returns The response from the API
     */
    getAllHomework(options: { class: string; school: string }) {
        return getAllHomework(this.dlool.baseUrl, options);
    }

    getPagedHomework(options: { class: string; school: string; page: number; limit: number }) {
        return getPagedHomework(this.dlool.baseUrl, options);
    }

    createHomework(data: NewHomework) {
        return createHomework(this.dlool, data);
    }

    deleteHomework(homeworkId: string) {
        return deleteHomework(this.dlool, homeworkId);
    }
}
