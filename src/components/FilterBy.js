import React from 'react'
import '../bootstrap.min.css'
import '../index.css'
import '../smartphoto.min.css'
import '../styles.css'
import '../plyr.css'
import '../core.min.css'
export default class FilterBy extends React.Component {
    render() {
        return (
                   <div class="btn-block mb-3 text-right">
                                <span>
                                    Filter by

      			<select class="ml-2 custom-select w-auto" id="filter">
                                        <option value="https://bounla.com/category/amateurs">Featured Creators</option>
                                        <option value="https://bounla.com/category/amateurs/new">New Creators</option>
                                    </select>
                                </span>
                            </div>
        )
    }
}