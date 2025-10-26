export function createWelcomeEmailTemplate(name, clientURL) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Welcome to Our Chat Application</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f7fa; line-height: 1.6;">
        <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f4f7fa;">
          <tr>
            <td style="padding: 40px 20px;">
              <!-- Main Container -->
              <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                      Welcome to Chatify! 🎉
                    </h1>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <p style="margin: 0 0 20px; color: #333333; font-size: 18px; font-weight: 600;">
                      Hi ${name},
                    </p>
                    <p style="margin: 0 0 24px; color: #555555; font-size: 16px;">
                      We're thrilled to have you join our chat community! Your account is all set up and ready to go. Connect with friends, share ideas, and start conversations that matter.
                    </p>
                    
                    <!-- CTA Button -->
                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 30px 0;">
                      <tr>
                        <td style="text-align: center;">
                          <a href="${clientURL}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4); transition: transform 0.2s;">
                            Get Started
                          </a>
                        </td>
                      </tr>
                    </table>
                    
                    <p style="margin: 24px 0 0; color: #555555; font-size: 16px;">
                      Need help getting started? Our support team is here for you. Simply reply to this email with any questions.
                    </p>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8f9fb; padding: 30px; border-top: 1px solid #e5e7eb;">
                    <p style="margin: 0 0 10px; color: #333333; font-size: 15px; font-weight: 600;">
                      Best regards,
                    </p>
                    <p style="margin: 0; color: #667eea; font-size: 15px; font-weight: 600;">
                      The Chat App Team
                    </p>
                    
                    <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0; color: #999999; font-size: 13px; line-height: 1.5;">
                        This email was sent to you because you recently created an account. If you didn't sign up, please disregard this email.
                      </p>
                    </div>
                  </td>
                </tr>
              </table>
              
              <!-- Bottom Spacing -->
              <table role="presentation" style="max-width: 600px; margin: 20px auto 0;">
                <tr>
                  <td style="text-align: center; padding: 0 20px;">
                    <p style="margin: 0; color: #999999; font-size: 12px;">
                      © ${new Date().getFullYear()} Chat Application. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    `;
}