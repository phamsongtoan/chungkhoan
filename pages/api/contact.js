// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { api } from '../../libs/api'

export default async function handler (req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    // return req.body
    const { ten, so_dien_thoai, email, khoa_hoc } = JSON.parse(req.body)

    const created = await api.post('/dang-ky-khoa-hocs', {
      data: {
        ten,
        so_dien_thoai,
        email,
        khoa_hoc
      }
    })

    return res.status(200).json({ success: true, doc: created })
  }
}
